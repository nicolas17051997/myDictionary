using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Dictionary.DAL.Models
{
    public class User
    {
        [Key]
        public int UserId { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string SurName { get; set; }
        public string Password { get; set; }
        public bool IsDelete { get; set; }

        public ICollection<Post> Posts { get; set; }
        public ICollection<UserRoles> UserRoles { get; set; }
        public ICollection<EmailNewUser> EmailNewUsers { get; set; }

    }
}
