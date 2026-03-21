import type { PriceSummaryItem } from "../types";

type Props = {
  items: PriceSummaryItem[];
  totalSavings?: string;
  grandTotal?: string;
  savingsNote?: string;
};

export function PriceSummaryTable({
  items,
  totalSavings,
  grandTotal,
  savingsNote,
}: Props) {
  if (!items || items.length === 0) return null;

  return (
    <div className="price-summary-section">
      <h2 className="ps-title">PRICE SUMMARY</h2>

      <div className="ps-table-wrap">
        <table className="ps-table">
          <thead>
            <tr>
              <th className="ps-th ps-th-label">Unit / Room</th>
              {items[0]?.sqft && <th className="ps-th">Sqft</th>}
              {items[0]?.bedConfig && (
                <th className="ps-th">Bed Configuration</th>
              )}
              <th className="ps-th">WhataHotel! Rate</th>
              <th className="ps-th">Regular Rate</th>
              <th className="ps-th">Total</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr
                key={item.label}
                className={`ps-tr${index % 2 === 1 ? " ps-tr-alt" : ""}`}
              >
                <td className="ps-td ps-td-label">{item.label}</td>
                {item.sqft && <td className="ps-td">{item.sqft}</td>}
                {item.bedConfig && <td className="ps-td">{item.bedConfig}</td>}
                <td className="ps-td ps-td-rate">{item.whatahotelRate}</td>
                <td className="ps-td ps-td-strike">{item.regularRate}</td>
                <td className="ps-td ps-td-total">{item.total}</td>
              </tr>
            ))}

            {totalSavings && (
              <tr className="ps-tr ps-tr-savings">
                <td
                  colSpan={items[0]?.sqft ? 3 : 2}
                  className="ps-td ps-td-label"
                >
                  💰 Total Savings
                </td>
                <td colSpan={3} className="ps-td ps-td-savings-value">
                  {totalSavings}
                </td>
              </tr>
            )}

            {grandTotal && (
              <tr className="ps-tr ps-tr-grand">
                <td
                  colSpan={items[0]?.sqft ? 3 : 2}
                  className="ps-td ps-td-label"
                >
                  COMBINED GRAND TOTAL
                </td>
                <td colSpan={3} className="ps-td ps-td-grand-value">
                  {grandTotal}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {savingsNote && <p className="ps-note">{savingsNote}</p>}
    </div>
  );
}
