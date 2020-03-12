using System;
using System.Collections.Generic;
using System.Text;

namespace Dictionary.DAL.Models
{
   public class UserRoles
    {
        public int RoleId { get; set; }
        public int UserId { get; set; }
        public Role Role { get; set; }
        public User User { get; set; }
       
    }
}
