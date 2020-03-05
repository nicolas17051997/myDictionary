using System;
using System.Collections.Generic;
using System.Text;

namespace Dictionary.DAL.Models
{
    public class User
    {
        public int   UserId { get; set; }
        public string Name { get; set; }
        public string SurName { get; set; }
        public string Password { get; set; }

    }
}
