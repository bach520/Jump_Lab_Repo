using Microsoft.EntityFrameworkCore;
using Project2.Data;
using System.Linq.Expressions;

namespace Project2.Repository
{
    public class Repository<T> : IRepository<T> where T : class
    {
        private readonly StudentContext _context;

        internal DbSet<T> dbSet;

        public Repository(StudentContext context)
        {
            _context = context;
            this.dbSet = _context.Set<T>();
        }

        IEnumerable<T> IRepository<T>.GetAll()
        {
            IQueryable<T> query = dbSet;
            return query.ToList();
        }

        public void Delete(T item)
        {
            dbSet.Remove(item);
        }

        public void RemoveRange(IEnumerable<T> items)
        {
            dbSet.RemoveRange(items);
        }

        public void Insert(T item)
        {
            dbSet.Add(item);
        }

        public void Update(T item)
        {
            dbSet.Update(item);
        }

        T IRepository<T>.GetFirstOrDefault(Expression<Func<T, bool>> filter)
        {
            IQueryable<T> query = dbSet;

            query = query.Where(filter);

            return query.FirstOrDefault();
        }
        /*
       public void Save()
       {
           _context.SaveChanges();
       }*/
    }
}
