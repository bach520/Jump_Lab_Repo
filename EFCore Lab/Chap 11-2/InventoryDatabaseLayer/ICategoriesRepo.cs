using InventoryModels.DTOs;
using System.Collections.Generic;

namespace InventoryDatabaseLayer
{
    public interface ICategoriesRepo
    {
        List<CategoryDto> ListCategoriesAndDetails();
    }
}
