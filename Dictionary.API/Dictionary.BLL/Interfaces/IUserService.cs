using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Dictionary.DAL.Models;
using Dictionary.BLL.DTO;

namespace Dictionary.BLL.Interfaces
{
   public interface IUserService: IBaseServise<User>
    {
        Task<UserViewModel> Authenticate (UserViewModel model);
        Task<NewUserViewModel> Register(NewUserViewModel model);
        Task<IEnumerable<UserViewModel>> GetAllUsers();
    }
}
