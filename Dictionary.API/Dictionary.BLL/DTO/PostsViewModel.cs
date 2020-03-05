using System;
using System.Collections.Generic;
using System.Text;

namespace Dictionary.BLL.DTO
{
   public class PostsViewModel
    {
        public int PostId { get; set; }
        public int UserId { get; set; }
        public string Title { get; set; }
        public string Body { get; set; }
        public bool IsDelete { get; set; }
        public DateTime DateTime { get; set; }
    }
}
