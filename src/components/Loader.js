import classes from './Loader.module.css';

function Loader() {
  return (
    <div>
      <div className={classes.skCubeGrid}>
        <div className={`${classes.skCube} ${classes.skCube1}`}></div>
        <div className={`${classes.skCube} ${classes.skCube2}`}></div>
        <div className={`${classes.skCube} ${classes.skCube3}`}></div>
        <div className={`${classes.skCube} ${classes.skCube4}`}></div>
        <div className={`${classes.skCube} ${classes.skCube5}`}></div>
        <div className={`${classes.skCube} ${classes.skCube6}`}></div>
        <div className={`${classes.skCube} ${classes.skCube7}`}></div>
        <div className={`${classes.skCube} ${classes.skCube8}`}></div>
        <div className={`${classes.skCube} ${classes.skCube9}`}></div>
      </div>
    </div>
  );
}

export default Loader;