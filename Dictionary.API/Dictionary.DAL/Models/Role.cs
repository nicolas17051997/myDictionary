using System;
using System.Collections.Generic;
using System.Text;

namespace Dictionary.DAL.Models
{
  public  class Role
    {
        public int RoleId { get; set; }
        public string RoleName { get; set; }
        public ICollection<UserRoles> UserRoles { get; set; }
    }
}
