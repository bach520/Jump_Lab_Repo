using Project2.Areas.Teacher.Models;
using Project2.Data;
using Project2.Models;
using Project2.Repository.IRepository;

namespace Project2.Repository
{
    public class CourseRepository : Repository<Course>, ICourseRepository
    {
        private StudentContext _context;

        public CourseRepository(StudentContext context) : base(context)
        {
            _context = context;
        }

        public void UpdateStudentCount()
        {
            
        }

        void ICourseRepository.Save()
        {
            _context.SaveChanges();
        }

        void ICourseRepository.Update(Course course)
        {
            _context.Course.Update(course);
        }
    }
}
