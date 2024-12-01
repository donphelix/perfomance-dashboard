import { useState } from "react";
import { HStack, Stack, Table } from "@chakra-ui/react";
import {
    PaginationRoot,
    PaginationPrevTrigger,
    PaginationNextTrigger,
    PaginationItems,
} from "@/components/ui/pagination";

const TransactionTable = ({ transactions }) => {
    const [page, setPage] = useState(1); // Current page
    const pageSize = 10; // Items per page

    // Calculate the paginated data
    const paginatedTransactions = transactions.slice(
        (page - 1) * pageSize,
        page * pageSize
    );

    return (
        <Stack width="full" gap="5">
            <Table.Root size="sm" variant="outline" striped>
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeader>Date</Table.ColumnHeader>
                        <Table.ColumnHeader>Transaction ID</Table.ColumnHeader>
                        <Table.ColumnHeader>Amount</Table.ColumnHeader>
                        <Table.ColumnHeader>Type</Table.ColumnHeader>
                        <Table.ColumnHeader>Status</Table.ColumnHeader>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {paginatedTransactions.map((txn) => (
                        <Table.Row key={txn.id}>
                            <Table.Cell>{txn.date}</Table.Cell>
                            <Table.Cell>{txn.id}</Table.Cell>
                            <Table.Cell>${txn.amount.toFixed(2)}</Table.Cell>
                            <Table.Cell>{txn.type}</Table.Cell>
                            <Table.Cell>{txn.status}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>

            {/* Pagination Controls */}
            <PaginationRoot
                count={transactions.length}
                pageSize={pageSize}
                page={page}
                onPageChange={(newPage) => setPage(newPage)}
            >
                <HStack wrap="wrap">
                    <PaginationPrevTrigger />
                    <PaginationItems />
                    <PaginationNextTrigger />
                </HStack>
            </PaginationRoot>
        </Stack>
    );
};

export default TransactionTable;
