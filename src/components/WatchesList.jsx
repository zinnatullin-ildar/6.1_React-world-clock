import Clock from './Clock';

function WatchesList(props) {
    const { clocks, onDelete } = props;

    const elements = clocks.map((item) => {
        const { id } = item;

        return (
            <Clock
                className='clock'
                item={item}
                key={id}
                onDelete={() => onDelete(id)}
            />
        );
    });

    return (
        <div className='clock-list'>
            {elements}
        </div>
    );
}

export default WatchesList;
