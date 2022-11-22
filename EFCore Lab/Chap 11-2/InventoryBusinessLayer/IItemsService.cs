using InventoryModels.DTOs;
using System;
using System.Collections.Generic;

namespace InventoryBusinessLayer
{
    public interface IItemsService
    {
        List<ItemDto> GetItems();
        List<ItemDto> GetItemsByDateRange(DateTime minDateValue, DateTime maxDateValue);
        List<GetItemsForListingDto> GetItemsForListingFromProcedure();
        List<GetItemsTotalValueDto> GetItemsTotalValues(bool isActive);
        string GetAllItemsPipeDelimitedString();
        List<FullItemDetailDto> GetItemsWithGenresAndCategories();
        int UpsertItem(CreateOrUpdateItemDto item);
        void UpsertItems(List<CreateOrUpdateItemDto> items);
        void DeleteItem(int id);
        void DeleteItems(List<int> itemIds);
    }
}
