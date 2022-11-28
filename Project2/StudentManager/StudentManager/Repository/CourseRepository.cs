using StudentManager.Data;
using StudentManager.Models;
using StudentManager.Repository.IRepository;

namespace StudentManager.Repository
{
    public class CourseRepository : Repository<Course>, ICourseRepository
    {
        private ApplicationDbContext _db;

        public CourseRepository(ApplicationDbContext context) : base(context)
        {
            _db = context;
        }

        public void UpdateStudentCount()
        {
            
        }

        void ICourseRepository.Update(Course course)
        {
            _db.Course.Update(course);
        }
    }
}
