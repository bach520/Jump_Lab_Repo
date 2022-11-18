using Project2.Models;
using System.Linq.Expressions;

namespace Project2.Repository
{
    public interface IRepository<T> where T : class
    {
        // T - Category
        T GetFirstOrDefault(Expression<Func<T, bool>> filter);

        IEnumerable<T> GetAll();
        void Insert(T item);
        void Update(T item);
        void Delete(T item);
        //void Save();
        void RemoveRange(IEnumerable<T> items);
    }
}
