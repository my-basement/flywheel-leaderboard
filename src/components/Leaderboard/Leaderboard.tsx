import React from "react";
import { LineChart, Card, AreaChart, BadgeDelta, Button, Callout, Icon, Toggle, ToggleItem, Table, TableHead, TableHeaderCell,TableBody,TableRow,TableCell, Badge, Text, Metric, Title, TextInput, Dropdown, DropdownItem} from "@tremor/react";

interface LeaderboardProps {
    scoringMetric: string;
    id: string;
    cell1: string;
    cell2: string;
    cell3: string;
    cell4: string;
    cell5: string;
    items: Record<string, any>[];
}

const Leaderboard = (props: LeaderboardProps) => {

    function findRank(array: Record<string, any>[], element: Record<string, any>): number {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === element) {
                return i + 1;
            }
        }
        return -1;
    }

    const getBadgeColor = (role: Number) => {
        if (role === 1) {
            return "amber";
        } else if (role === 2) {
            return "slate";
        } else if (role === 3) {
            return "stone";
        } else {
            return "gray";
        }
    }

    return (
        <>
        <Card>
                 {/* <Button color='pink' icon={QuestionOutlineIcon} text='learn more about how leaderboards work'></Button>    */}
                <Table>
        <TableHead>
            <TableRow>
                <TableHeaderCell>

                </TableHeaderCell>
                <TableHeaderCell>
                    
                </TableHeaderCell>
                {props.cell1 && (
                <TableHeaderCell>
                 {props.cell1}
                </TableHeaderCell>)}
                {props.cell2 && (
                <TableHeaderCell>
                 {props.cell2}
                </TableHeaderCell>)}
                {props.cell3 && (
                <TableHeaderCell>
                 {props.cell3}
                </TableHeaderCell>)}
                {props.cell4 && (
                <TableHeaderCell>
                 {props.cell4}
                </TableHeaderCell>)}
                {props.cell5 && (
                <TableHeaderCell>
                 {props.cell5}
                </TableHeaderCell>)}
            </TableRow>
        </TableHead>
        <TableBody>
            {props.items.sort((a,b) => b[props.scoringMetric] - a[props.scoringMetric]).map((item) => (
                <TableRow key={ item[props.cell1] }>
                    <TableCell>
                     <Badge color={getBadgeColor(findRank(props.items.sort((a,b) => b[props.scoringMetric] - a[props.scoringMetric]), item))}>{findRank(props.items.sort((a,b) => b[props.scoringMetric] - a[props.scoringMetric]), item) }</Badge>
                    </TableCell>
                    <TableCell>
                        <Text color='purple'>{item[props.id]}</Text>
                    </TableCell>
                    {props.cell1 && (<TableCell>
                          <Text color='purple'>{item[props.cell1]}</Text>
                    </TableCell>)}
                    {props.cell2 && (<TableCell>
                         <Text color='purple'>{item[props.cell2]}</Text>
                    </TableCell>)}
                    {props.cell3 && <TableCell>
                         <Text color='purple'>{item[props.cell3]}</Text>
                    </TableCell>}
                    {props.cell4 && <TableCell>
                          <Text color='purple'>{item[props.cell4]}</Text>
                    </TableCell>}
                    {props.cell5 && (<TableCell>
                          <Text color='purple'>{item[props.cell5]}</Text>
                    </TableCell>)}
                </TableRow>
            ))}
        </TableBody>
    </Table>
     </Card>
        </>
    )
}

export default Leaderboard;