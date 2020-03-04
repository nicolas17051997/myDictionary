using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Dictionary.DAL.Models;

namespace Dictionary.DAL.EntityContext
{
    public class ApplicationContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Post> Posts { get; set; }
        public DbSet<EmailNewUser> EmailNewUsers {get; set; }
        public ApplicationContext()
        {

        }

    }
}
