﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Dictionary.BLL.DTO
{
  public  class NewUserViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string SurName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }
    }
}
