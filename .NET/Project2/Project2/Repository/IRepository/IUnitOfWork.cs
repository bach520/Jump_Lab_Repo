using Project2.Repository.IRepository;

namespace Project2.Repository.IRepository
{
    public interface IUnitOfWork
    {
        IStudentRepository Student{ get; }
        ICourseRepository Course { get; }

        void Save();
    }
}
