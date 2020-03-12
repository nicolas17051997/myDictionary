using System.Threading.Tasks;

namespace Dictionary.BLL.Interfaces
{
   public interface IBaseServise<T> where T:class
    {
        Task<T> Get(int id);
        Task<T> Create(T data);
        Task Update(T data);
        Task Delete(T data);
    }
}
