using Microsoft.AspNetCore.Mvc.Rendering;
using System.Collections.Generic;
using System.Drawing;

namespace Project2.Models
{
    public class GradeLists
    {
        public static Dictionary<int, char> gradelist = new Dictionary<int, char>()
        {
            {0, 'A'},
            {1, 'B'},
            {2, 'C'},
            {3, 'D'},
            {4, 'F'}
        };
    }
}
