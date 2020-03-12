using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Dictionary.DAL.Repository
{
    public interface IRepository<T> where T : class
    {
        IEnumerable<T> GetAll();
        Task<T> Create(T entity);
        Task<T> Get(int id);
        Task Insert(T entity);
        Task Update(T entity);
        Task Delete(T entity);
        Task Remove(T entity);
        Task SaveChanges();
    }
}
