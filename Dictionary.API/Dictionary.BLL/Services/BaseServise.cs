using System;
using System.Collections.Generic;
using System.Threading.Tasks;

using Dictionary.BLL.Interfaces;
using Dictionary.DAL.Models;
using Dictionary.DAL.Repository;

namespace Dictionary.BLL.Services
{
    public class BaseServise<T> : IBaseServise<T> where T : class
    {
        protected readonly IRepository<T> _repository;

        public BaseServise(IRepository<T> repository )
        {
            this._repository = repository;
        }

        public virtual async Task<T> Create(T data) => await _repository.Create(data);


        public virtual async Task Delete(T data) => await _repository.Delete(data);


        public virtual async Task<T> Get(int id) => await _repository.Get(id);


        public virtual async Task Update(T data) => await _repository.Update(data);
        
    }
}
