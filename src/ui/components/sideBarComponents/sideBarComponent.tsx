import { useState } from "react"
import { ChartComponent } from "../chartComponents/chartComponent.tsx"
import { FilterComponent } from "../filterComponents/filterComponent.tsx"
import { PaginationComponent } from "../paginationComponents/paginationComponent.tsx"
import { SortComponent } from "../sortComponents/sortComponent.tsx"
import'./sideBarComponent.css'
import { CopperButton, IronButton, SteelButton, TinButton } from "../genericComponents/buttons/sideBarButtons/sideBarButtons.tsx"
export const SideBarComponent: React.FC<{}> = ({}) => {
    const [sortIsOpen, setSortIsOpen] = useState(false)
    const openSort = () => {setSortIsOpen(true)}
    const [filterIsOpen, setFilterIsOpen] = useState(false)
    const openFilter = () => {setFilterIsOpen(true)}
    const [chartIsOpen, setChartIsOpen] = useState(false)
    const openChart = () => {setChartIsOpen(true)}
    const [paginationIsOpen, setPaginationIsOpen] = useState(false)
    const openPagination = () => {setPaginationIsOpen(true)}
    return (<>
    <div className="side-bar-component-wrapper">
    <TinButton onClickAction={openSort} />
    <IronButton onClickAction={openFilter} />
    <CopperButton onClickAction={openChart} />
    <SteelButton onClickAction={openPagination} />
    </div>
    <div className="functionality-component-wrapper">
    <SortComponent sortIsOpen={sortIsOpen} setSortIsOpen={setSortIsOpen}/>
    <FilterComponent filterIsOpen={filterIsOpen} setFilterIsOpen={setFilterIsOpen}/>
    <ChartComponent chartIsOpen={chartIsOpen} setChartIsOpen={setChartIsOpen}/>
    <PaginationComponent paginationIsOpen={paginationIsOpen} setPaginationIsOpen={setPaginationIsOpen}/>
    </div>
    </>)
}