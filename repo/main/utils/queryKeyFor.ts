import { QueryKey } from "@/repo/main";

export function queryKeyFor({
  operation,
  resourceType,
  resourceId,
  params,
}: QueryKey): [string, string | undefined, number | undefined, string[]] {
  return [operation, resourceType, resourceId, params];
}
