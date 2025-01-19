using Microsoft.EntityFrameworkCore;

namespace ServiceFromTemplateNetWithMssql.Infrastructure;

public class ServiceFromTemplateNetWithMssqlDbContext : DbContext
{
    public ServiceFromTemplateNetWithMssqlDbContext(
        DbContextOptions<ServiceFromTemplateNetWithMssqlDbContext> options
    )
        : base(options) { }
}
