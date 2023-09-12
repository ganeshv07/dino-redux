import { AppBar, Grid, Tab, Tabs, Typography, Box ,Button} from '@material-ui/core';
import { useState } from 'react';
import * as React from 'react';
import { useSelector } from 'react-redux';
import Strings from '../constants/strings';
import _ from '../../utils/lodash';
import TabPanel from '../common/tabPanel';
import MergeTabels from './mergeTables';
import ShiftIn from './shiftIn';
import useStyles from './tableManagementStyles';

const setProps = (index: any) => {
    return {
        id: `tab-${index}`,
        'aria-controls': `tabpanel-${index}`
    };
};

export default function TableManagement(props:any) {
    const storeData = useSelector(
        (state: any) => {
            return {
                isSideMenuOpen: state.App.isSideMenuOpen,
                typeOfUser: state.App.typeOfUser,
                userAccessPermissions: state.App?.loginUserDetails?.features || [],
                sourceDetails: state.App.sourceDetails
            };
        }
    );

    const testManagementPermissions = _.filter(storeData.userAccessPermissions, { moduleAlias: 'TEST_MANAGEMENT' });
    const hasAccess = (alisName:any) => {
        return _.find(testManagementPermissions, { featureAlias: alisName });
    };

    const classes = useStyles(props);
    const [tabIndex, setTabIndex] = useState(0);
    const [, handleStatus] = useState(undefined);
    const [isMergeTabels, setIsMergeTabels] = useState(false)
    const [isOpenAddEditModel, handleOpenAddEditModel] = React.useState(false);
    const [isOpenShiftInModel, handleOpenShiftInModel] = React.useState(true);



    //Handle active tab
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        handleStatus(undefined);
        setTabIndex(newValue);
    };

    const getPageTitle = () => {
        switch (tabIndex) {
            case 0:
                return Strings.TABLE_MANAGEMENT.FIRST_FLOOR;
            case 1:
                return Strings.TABLE_MANAGEMENT.SECOND_FLOOR;
            default:
                return;
        }
    };



    //render UI
    return (
        <div className={classes.maindiv}>
            <div className={classes.mainContainer}>
                {/* Show the tabs list */}
                <Grid container className={classes.container}>
                    <AppBar position='static' className={classes.tabBG}>
                    <Grid container className={classes.displayFlex}>
              <Grid item xs={10}>
                        <Tabs indicatorColor='primary' textColor='primary' value={tabIndex} onChange={handleChange} aria-label={Strings.TABLE_MANAGEMENT.TABLE_MANAGEMENT} >
                            <Tab  label={Strings.TABLE_MANAGEMENT.FIRST_FLOOR} {...setProps(0)}/>
                            <Tab  label={Strings.TABLE_MANAGEMENT.SECOND_FLOOR} {...setProps(1)}/>
                        </Tabs>
                        </Grid>
                        <Grid item xs={2} className={classes.addContainer}>
                  <Button variant='contained'
                    className={classes.mergeBtn}
                     onClick={() => { handleOpenAddEditModel(true); }}
                  >{'Merge Tabels'}</Button>
                
              </Grid>
                        </Grid>
                    </AppBar>
                    <Grid item md={9}>
                    <TabPanel value={tabIndex} index={0}>
                    <Grid className={`${classes.mt20} ${classes.metric}`}>
                      <Box className={classes.tableManagementItem}>
                      <Grid container className={classes.firstrow}>
                      <Typography variant='h5' component='h2' >Tabel 1</Typography>
                     <Typography >Reserved</Typography>
                     </Grid>
                      </Box>
               
                       </Grid>
                        </TabPanel>
                    
                    
                        <TabPanel value={tabIndex} index={1}>
                            {/* {<TestPrice />} */}
                            <div> table 2</div>
                        </TabPanel>

                    </Grid>
                    <Grid item md={3}>
                    <Box className={classes.tableContainer}>
          <div className={classes.tableSubHeading}>
            <span className={classes.tableLabelText}>{"Tabels"}</span>
            <span className={classes.tableLabelText}>{"9/18"}</span>
          </div>
          <div className={classes.tableItem}>
          <span className={classes.tableItemLabelText}>{"Reserved Tables"}</span>
          <span className={classes.tableItemPriceText}>{"2"}</span>
          </div>
          <div className={classes.tableItem}>
          <span className={classes.tableItemLabelText}>{"Running Tables"}</span>
          <span className={classes.tableItemPriceText}>{"3"}</span>
          </div>
          <div className={classes.tableItem}>
          <span className={classes.tableItemLabelText}>{"Occupied Tables"}</span>
          <span className={classes.tableItemPriceText}>{"1"}</span>
          </div>
          <div className={classes.tableItem}>
          <span className={classes.tableItemLabelText}>{"Available Tables"}</span>
          <span className={classes.tableItemPriceText}>{"1"}</span>
          </div>
          <div className={classes.tableItem}>
          <span className={classes.tableItemLabelText}>{"Payment Due Tables"}</span>
          <span className={classes.tableItemPriceText}>{"3"}</span>
          </div>
        </Box>
        <Box className={classes.tableContainer}>
          <div className={classes.tableSubHeading}>
            <span className={classes.tableLabelText}>{"Reservations"}</span>
          </div>
          <div className={classes.tableItem}>
          <span className={classes.tableItemLabelText}>{"Eleanaur"}</span>
          <span className={classes.tableItemPriceText}>{"6:00 PM"}</span>
          </div>
          <div className={classes.tableItem}>
          <span className={classes.tableItemLabelText}>{"Amrutha"}</span>
          <span className={classes.tableItemPriceText}>{"8:00 PM"}</span>
          </div>
         
        </Box>
       </Grid>
        </Grid>
            </div>

            {isOpenAddEditModel && < MergeTabels   handleOpenAddEditModel={handleOpenAddEditModel} /> }

            {isOpenShiftInModel && <ShiftIn handleOpenShiftInModel={handleOpenShiftInModel} />}

        </div >
    );
}
