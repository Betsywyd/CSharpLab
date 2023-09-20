using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using EmployeeToDosBackEnd.Models;

namespace EmployeeToDosBackEnd.Data
{
    public class EmployeeToDosBackEndContext : DbContext
    {
        public EmployeeToDosBackEndContext (DbContextOptions<EmployeeToDosBackEndContext> options)
            : base(options)
        {
        }

        public DbSet<EmployeeToDosBackEnd.Models.Employee> Employee { get; set; } = default!;

        public DbSet<EmployeeToDosBackEnd.Models.ToDo>? ToDo { get; set; }
    }
}
