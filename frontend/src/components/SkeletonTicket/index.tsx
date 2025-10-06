import { Skeleton } from "@mui/material";
import styles from "./styles.module.css";

export function SkeletonTicket() {
  return (
    <table className={styles.table}>
      <thead className={styles.tableHeader}>
        <tr>
          <th>
            <Skeleton variant="text" sx={{ width: "40%", height: "30px" }} />
          </th>
          <th>
            <Skeleton variant="text" sx={{ width: "45%", height: "30px" }} />
          </th>
          <th>
            <Skeleton variant="text" sx={{ width: "45%", height: "30px" }} />
          </th>
          <th>
            <Skeleton variant="text" sx={{ width: "55%", height: "30px" }} />
          </th>
          <th>
            <Skeleton variant="text" sx={{ width: "70%", height: "30px" }} />
          </th>
          <th>
            <Skeleton variant="text" sx={{ width: "70%", height: "30px" }} />
          </th>
          <th>
            <Skeleton variant="text" sx={{ width: "70%", height: "30px" }} />
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: 3 }).map((_, index) => (
          <tr key={index}>
            <th className={styles.clientInfo}>
              <Skeleton variant="text" sx={{ width: "40%", height: "30px" }} />
              <Skeleton variant="text" sx={{ width: "50%", height: "30px" }} />
            </th>
            <th className={styles.clientInfo}>
              <Skeleton variant="text" sx={{ width: "55%", height: "30px" }} />
              <Skeleton variant="text" sx={{ width: "45%", height: "30px" }} />
            </th>
            <th>
              <Skeleton variant="text" sx={{ width: "100%", height: "30px" }} />
            </th>
            <th>
              <Skeleton variant="text" sx={{ width: "100%", height: "30px" }} />
            </th>
            <th>
              <Skeleton variant="text" sx={{ width: "100%", height: "30px" }} />
            </th>
            <th>
              <Skeleton variant="text" sx={{ width: "100%", height: "30px" }} />
            </th>
            <th>
              <Skeleton variant="text" sx={{ width: "100%", height: "30px" }} />
            </th>
            <th></th>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
