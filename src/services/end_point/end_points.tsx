interface EndPoint {
  url?: string;
  list?: string;
  add?: string;
  edit?: string;
  delete?: string;
  service?: string;
}

export const end_points: Record<string, EndPoint> = {
  // Authentication
  price_list: { url: '/PricingPlan/get_priceplan', service: 'ms1' },
};
