using Microsoft.EntityFrameworkCore;

namespace AnotherOne.Infrastructure;

public class AnotherOneDbContext : DbContext
{
    public AnotherOneDbContext(DbContextOptions<AnotherOneDbContext> options)
        : base(options) { }
}
