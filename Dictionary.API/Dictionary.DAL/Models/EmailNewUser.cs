using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Dictionary.DAL.Models
{
   public class EmailNewUser
    {
        [Key]
        public int EmailId { get; set; }
        public string Email { get; set; }

        public int UserId { get; set; }
        public User User { get; set; }
    }
}
