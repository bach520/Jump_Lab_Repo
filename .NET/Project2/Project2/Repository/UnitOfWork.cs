using Project2.Repository.IRepository;
using Project2.Data;
using Microsoft.EntityFrameworkCore.Design.Internal;

namespace Project2.Repository
{
    public class UnitOfWork : IUnitOfWork
    {
        private StudentContext _db;
        public IStudentRepository Student { get; private set; }
        public ICourseRepository Course { get; private set; }

        public UnitOfWork(StudentContext db) {
            _db = db;

            Student = new StudentRepository(_db);

            Course = new CourseRepository(_db);
        }

        void IUnitOfWork.Save()
        {
            _db.SaveChanges();
        }
    }
}
