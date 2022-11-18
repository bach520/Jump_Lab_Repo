using Project2.Models;

namespace Project2.Repository.IRepository
{
    public interface IStudentRepository : IRepository<Student>
    {
        Student GetStudentById(int Id);
        bool IDNotExist(int Id);
        void Update(Student student);
        void Save();
    }
}
