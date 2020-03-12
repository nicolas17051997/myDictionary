using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Dictionary.BLL.Helper;
using Dictionary.DAL.Models;
using Dictionary.BLL.DTO;

namespace Dictionary.API.Controllers
{
    [Authorize]
    [ApiController]
    public class AdminController: ControllerBase
    {
        [HttpPost("SendLink")]
        public async Task<IActionResult> CreateRegisterLink(NewUserViewModel model)
        {
            return BadRequest();
        }
        [HttpPost("Authorize")]
        public async Task<IActionResult> Authorize(UserViewModel model)
        {
            return BadRequest();
        }
        [HttpGet("AllUser")]
        public async Task<IActionResult> AllUsers()
        {
            return BadRequest();
        }

    }
}
