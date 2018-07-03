using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace MobileStore.Models
{
    public class Mobile
    {
        [Key]
        public Int64 Id
        { get; set; }
        public int msId
        { get; set; }
        public string name
        { get; set; }
        public string model
        { get; set; }
        public string releaseDate
        { get; set; }
        public string description
        { get; set; }
        public Int32 price
        { get; set; }
        public string rating
        { get; set; }
        public Int32 available
        { get; set; }
        public string image { get; set; }

    }
}
