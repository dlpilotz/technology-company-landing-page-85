import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useLocation } from "react-router-dom";

export function BreadcrumbNav() {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(segment => segment);

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <Breadcrumb className="mb-4 px-4 py-2">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        {pathSegments.map((segment, index) => {
          const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
          const isLast = index === pathSegments.length - 1;

          return (
            <BreadcrumbItem key={path}>
              <BreadcrumbSeparator />
              {isLast ? (
                <BreadcrumbPage>{capitalizeFirstLetter(segment)}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink href={path}>
                  {capitalizeFirstLetter(segment)}
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}