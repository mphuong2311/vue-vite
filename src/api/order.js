import request from "@/utils/request";

export function getOrder(orderId) {
  return request({
    url: `/orders/${orderId}`,
    method: "get",
  });
}

export function getMaps() {
  return request({
    url: "/maps",
    method: "get",
  });
}
