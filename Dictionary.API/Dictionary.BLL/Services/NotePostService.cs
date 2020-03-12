using System;
using System.Collections.Generic;
using System.Threading.Tasks;

using Dictionary.DAL.Repository;
using Dictionary.DAL.Models;
using Dictionary.BLL.Interfaces;
using Dictionary.BLL.DTO;

namespace Dictionary.BLL.Services
{
   public class NotePostService: BaseServise<Post>, IPostsService
    {
        private readonly IUserService _userService;
        public NotePostService(IRepository<Post> repository,
            IUserService userService): base(repository)
        {
            _userService = userService;
        }
    }
}
