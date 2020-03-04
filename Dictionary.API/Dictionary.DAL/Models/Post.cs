using System;
using System.Collections.Generic;
using System.Text;

namespace Dictionary.DAL.Models
{
   public class Post
    {
        public int PostId { get; set; }
        public string Title { get; set; }
        public string Body { get; set; }
        public bool IsDelete { get; set; }
        public DateTime DateTime { get; set; }
    }
}
