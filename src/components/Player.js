import ReactPlayer from 'react-player'
function Player({src}) {
    const width = window.innerWidth - 400
    const height = 9*width / 16
    return (
        <div className='player'>
            <ReactPlayer 
                url={src}
                config={{
                    file: {forceVideo: true}
                }}
                controls={false}
                width={width}
                height={height}
                playing={true}
                />

        </div>
    )
}

export default Player
