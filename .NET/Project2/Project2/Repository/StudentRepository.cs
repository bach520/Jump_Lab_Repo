using Project2.Data;
using Project2.Models;
using Project2.Repository.IRepository;
using System.Linq.Expressions;

namespace Project2.Repository
{
    public class StudentRepository : Repository<Student>, IStudentRepository
    {
        private StudentContext _context;

        public StudentRepository(StudentContext context) : base(context)
        {
            _context = context;
        }
        public Student GetStudentById(int Id)
        {
            return _context.Student.Where(x => x.Id == Id).FirstOrDefault();
        }
        void IStudentRepository.Update(Student student)
        {
            _context.Student.Update(student);
        }
        void IStudentRepository.Save()
        {
            _context.SaveChanges();
        }
        public bool IDNotExist(int Id)
        {
            return !_context.Student.Any(x => x.Id == Id);
        }
    }
}
