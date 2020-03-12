using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Dictionary.DAL.Models
{
   public class Post
    {
        [Key]
        public int PostId { get; set; }
        public string Author { get; set; }
        public string Title { get; set; }
        public string Body { get; set; }
        public bool IsDelete { get; set; }
        public DateTime DateTime { get; set; }

        public int UserId { get; set; }
        public User User { get; set; }
    }
}
