﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Dictionary.DAL.Models
{
  public  class Role
    {
        [Key]
        public int RoleId { get; set; }
        public string RoleName { get; set; }
        public ICollection<UserRoles> UserRoles { get; set; }
    }
}
