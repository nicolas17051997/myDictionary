using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Dictionary.BLL.DTO;
using Dictionary.BLL.Interfaces;
using Dictionary.DAL.Models;
using Dictionary.DAL.Repository;

namespace Dictionary.BLL.Services
{
    public class UserService : BaseServise<User>, IUserService
    {
        private readonly IRolesService _rolesService;
        private readonly IUserRoleService _userService;
        public UserService(IRepository<User> repository,
            IUserRoleService userRoleService,
            IRolesService rolesService
            ): base(repository)
        {
            _rolesService = rolesService;
            _userService = userRoleService;
        }
        public Task<UserViewModel> Authenticate(UserViewModel model)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<UserViewModel>> GetAllUsers()
        {
            throw new NotImplementedException();
        }

        public Task<NewUserViewModel> Register(NewUserViewModel model)
        {
            throw new NotImplementedException();
        }
    }
}
