using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

using Dictionary.BLL.DTO;
using Dictionary.BLL.Interfaces;
using Dictionary.DAL;

namespace Dictionary.API.Controllers
{
    [Authorize]
    [ApiController]
    public class NodePostsController: ControllerBase
    {
        [HttpPost("AddNewPost")]
        public async Task<IActionResult> CreateNewPost(PostsViewModel model)
        {
            return BadRequest();
        }

        [HttpGet("GetPosts")]
        public async Task<IActionResult> GetAllUserPosts()
        {
            return BadRequest();
        }
        [HttpPost("DeletePost")]
        public async Task<IActionResult> RemovePost(PostsViewModel model)
        {
            return BadRequest();
        }
        [HttpPut("UpdatePost")]
        public async Task<IActionResult> UpdatePost(PostsViewModel model)
        {
            return  BadRequest();
        }
    }
}
