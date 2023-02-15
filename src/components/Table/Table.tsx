import React from "react";
import styles from "./Table.module.css";
import classNames from "classnames";
import AppText from "src/components/AppText";
import Colors from "src/styles/colors";

interface TableProps<T extends string> {
  className?: string;
  tableHeader: { key: T; value: string }[];
  tableData: Record<T, string>[];
  excludedData: T[] | undefined;
}

function Table<T extends string>({ className, tableData, tableHeader, excludedData }: TableProps<T>) {
  const filteredTableHeader = tableHeader.filter((tableHead) => !excludedData?.includes(tableHead.key));
  return (
    <table className={classNames(styles.table, className)}>
      <tr className={styles.tableHeadContainer}>
        {filteredTableHeader.map((tableHead, index, array) => {
          const isFirst = index === 0;
          const isLast = index === array.length - 1;
          return (
            <th
              key={tableHead.key}
              className={classNames(
                styles.tableHead,
                isFirst && styles.alignStart,
                isLast && styles.alignEnd,
                !isFirst && !isLast && styles.alignCenter
              )}
            >
              <AppText color={Colors.BLACK_BLUE} type={"SMALL_TEXT"}>
                {tableHead.value}
              </AppText>
            </th>
          );
        })}
      </tr>
      {tableData.map((data, index) => {
        return (
          <tr key={index} className={classNames(styles.tableHeadContainer, index % 2 === 0 && styles.oddTableHead)}>
            {Object.entries(data)
              .filter((d) => !excludedData?.includes(d[0] as T))
              .map((_, index, array) => {
                const isFirst = index === 0;
                const isLast = index === array.length - 1;
                // fetch same value type table header at index
                const value = data[filteredTableHeader[index]?.key];
                return (
                  <td
                    key={value}
                    className={classNames(
                      styles.tableHead,
                      isFirst && styles.alignStart,
                      isLast && styles.alignEnd,
                      !isFirst && !isLast && styles.alignCenter
                    )}
                  >
                    <AppText color={Colors.BLACK_BLUE} type={"SMALL_TEXT"}>
                      {value}
                    </AppText>
                  </td>
                );
              })}
          </tr>
        );
      })}
    </table>
  );
}

export default React.memo(Table) as typeof Table;
