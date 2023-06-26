const baseUrl = './photo-sphere-viewer/assets/';

const viewer = new PhotoSphereViewer.Viewer({
    container: 'viewer',
    touchmoveTwoFingers: true,
    mousewheelCtrlKey: true,
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    navbar: 'zoom fullscreen',

    plugins: [
        PhotoSphereViewer.MarkersPlugin,
        [PhotoSphereViewer.VirtualTourPlugin, {
            positionMode: 'gps',
            renderMode: 'markers',
        }],
    ],
});

const virtualTour = viewer.getPlugin(PhotoSphereViewer.VirtualTourPlugin);

virtualTour.setNodes([
  {
      id: '1',
      panorama: './img/1.jpg',
      name: '',
      links: [{ nodeId: '2', gps: [-105, 20] }],
      gps: [-110, -40],
  },
  {
      id: '2',
      panorama: './img/2.jpg',
      name: '',
      links: [
        { nodeId: '1', gps: [109, 0] },
        { nodeId: '3', gps: [-75, 20] }
      ],
      gps: [110, 20]
  },
  {
    id: '3',
    panorama: './img/3.jpg',
    name: '',
    links: [
    { nodeId: '2', gps: [-80, 0] },
    { nodeId: '4', gps: [85, 20] }
    ],
    gps: [-80.156168, 25.666623],
  },
  {
    id: '4',
    panorama: './img/4.jpg',
    name: '',
    links: [
      { nodeId: '3', gps: [-80, 0] }
    ],
    gps: [-80.156168, 25.666623],
  },
], '4');