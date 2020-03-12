using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Dictionary.DAL.Models;
using Dictionary.DAL.Helper;

namespace Dictionary.DAL.EntityContext
{
    public class ApplicationContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Post> Posts { get; set; }
        public DbSet<UserRoles> UserRoles { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<EmailNewUser> EmailNewUsers {get; set; }
        static ApplicationContext()
        {

        }
        public ApplicationContext(DbContextOptions<ApplicationContext> dbContext): base(dbContext)
        {

        }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<UserRoles>()
                .HasKey(bc => new { bc.UserId, bc.RoleId });
            builder.Entity<UserRoles>()
                .HasOne(bc => bc.User)
                .WithMany(b => b.UserRoles)
                .HasForeignKey(x => x.UserId);
            builder.Entity<UserRoles>()
                .HasOne(bc => bc.Role)
                .WithMany(bc => bc.UserRoles)
                .HasForeignKey(x => x.RoleId);

            Role adminRole = new Role { RoleId = 1, RoleName = "Admin" };
            Role userRole = new Role { RoleId = 2, RoleName = "User" };

            builder.Entity<Role>().HasData(new Role[] { adminRole, userRole });

            User adminUser = new User
            {
                UserId = 1,
                Email = "admin@gmail.com",
                Password = CreateHash.GetHashString("admin1203"),
                Name = "Admin",
                SurName = "Adminovich",
                IsDelete = false
            };
            User odenryUser = new User
            {
                UserId = 2,
                Email = "k170597@gmail.com",
                Password = CreateHash.GetHashString("user123"),
                Name = "Golden",
                SurName = "Coffild",
                IsDelete = false
            };
            builder.Entity<User>().HasData(new User[] { adminUser, odenryUser });
            UserRoles userRoles = new UserRoles
            {
                RoleId = adminRole.RoleId,
                UserId = adminUser.UserId
            };
            UserRoles odenryRole = new UserRoles
            {
                RoleId = userRole.RoleId,
                UserId = odenryUser.UserId
            };

            builder.Entity<UserRoles>().HasData(new UserRoles[] { userRoles, odenryRole });

            base.OnModelCreating(builder);
        }

    }
}
