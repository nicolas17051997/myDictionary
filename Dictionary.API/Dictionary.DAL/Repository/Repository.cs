using System;
using System.Collections.Generic;
using System.Text;
using Dictionary.DAL.EntityContext;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

namespace Dictionary.DAL.Repository
{
    public class Repository<T> : IRepository<T> where T : class
    {
        private readonly ApplicationContext _dbcontext;
        private DbSet<T> entities;
        string erroreMessage = string.Empty;
        public Repository( ApplicationContext applicationContext)
        {
           this._dbcontext = applicationContext;
            entities = _dbcontext.Set<T>();
         }

        public async Task<T> Create(T entity)
        {
            if(entity == null)
            {
                throw new ArgumentNullException();
            }
            var item = await _dbcontext.Set<T>().AddAsync(entity);
            await _dbcontext.SaveChangesAsync();
            return item.Entity;
        }

        public async Task Delete(T entity)
        {
            if(entity == null)
            {
                throw new ArgumentNullException();
            }
            entities.Remove(entity);
            await _dbcontext.SaveChangesAsync();
        }

        public async Task<T> Get(int id)
        {
           return await entities.FindAsync(id);
        }

        public IEnumerable<T> GetAll()
        {
            return entities.AsEnumerable();
        }

        public async Task Insert(T entity)
        {
            if(entity == null)
            {
                throw new ArgumentNullException();
            }
            entities.Add(entity);
            await _dbcontext.SaveChangesAsync();
        }

        public async Task Remove(T entity)
        {
            if(entity == null)
            {
                throw new ArgumentNullException();
            }

            entities.Remove(entity);
        }

        public async Task SaveChanges()
        {
            await _dbcontext.SaveChangesAsync();
        }

        public async Task Update(T entity)
        {
            if(entity == null)
            {
                throw new ArgumentNullException("entity");
            }
            await _dbcontext.SaveChangesAsync();
        }
    }
}
