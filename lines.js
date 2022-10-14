const bcsMap = document.getElementById('Path_118');
const bcs = document.querySelector('.item_bcs');
const qroMap = document.getElementById('Path_157');
const qro = document.querySelector('.item_qro2');
const nayMap = document.getElementById('Path_149');
const nay = document.querySelector('.item_nay');
const mexMap = document.getElementById('Path_143');
const mex = document.querySelector('.item_mex');
const jalMap = document.getElementById('Path_141');
const jal = document.querySelector('.item_jal');
const tamMap = document.getElementById('Path_169');
const tam = document.querySelector('.item_tam');
const verMap = document.getElementById('Path_173');
const ver = document.querySelector('.item_ver');
const gtoMap = document.getElementById('Path_134');
const gto = document.querySelector('.item_gto');

const width = window.innerWidth;
console.log("EL ancho es: ", width);
if(width > 1099 )
{

    const lineBCS = new LeaderLine(
        bcs,
    LeaderLine.pointAnchor(bcsMap, {
        x: 70,
        y: 50
      }),
    {
        color: '#F15D3B',
        path: 'grid',
        startSocket: 'bottom',
        endSocket: 'left',
        endPlug: 'disc',
        endPlugSize: 2.5,
        size: 1
    }
);
new LeaderLine(
    qro,
    LeaderLine.pointAnchor(qroMap, {
        x: 10,
        y: 18
    }),
    {
        color: '#F15D3B',
        path: 'grid',
        startSocket: 'bottom',
        endSocket: 'bottom',
        endPlug: 'disc',
        endPlugSize: 2.5,
        size: 1
    }
);
const lineNAY = new LeaderLine(
    nay,
    LeaderLine.pointAnchor(nayMap, {
        x: 15,
        y: 24
      }),
    {
        color: '#F15D3B',
        path: 'grid',
        startSocket: 'bottom',
        endSocket: 'left',
        endPlug: 'disc',
        endPlugSize: 2.5,
        size: 1
    }
);
const lineVER = new LeaderLine(
    ver,
    LeaderLine.pointAnchor(verMap, {
        x: 55,
        y: 80
      }),
      {
        color: '#F15D3B',
        path: 'grid',
        startSocket: 'bottom',
        endSocket: 'top',
        endPlug: 'disc',
        endPlugSize: 2.5,
        size: 1
    }
);
const lineJAL = new LeaderLine(
    jal,
    LeaderLine.pointAnchor(jalMap, {
        x: 35,
        y: 50
      }),
    {
        color: '#F15D3B',
        path: 'grid',
        startSocket: 'bottom',
        endSocket: 'left',
        endPlug: 'disc',
        endPlugSize: 2.5,
        size: 1
    }
);
const lineGTO = new LeaderLine(
    gto,
    LeaderLine.pointAnchor(gtoMap, {
        x: 20,
        y: 20
    }),
    {
        color: '#F15D3B',
        path: 'grid',
        startSocket: 'bottom',
        endSocket: 'bottom',
        endPlug: 'disc',
        endPlugSize: 2.5,
        size: 1
    }
);
const lineTAM = new LeaderLine(
    tam,
    LeaderLine.pointAnchor(tamMap, {
        x: 30,
        y: 60
    }),
    {
        color: '#F15D3B',
        path: 'grid',
        startSocket: 'bottom',
        endSocket: 'top',
        endPlug: 'disc',
        endPlugSize: 2.5,
        size: 1
    }
    );
const lineMEX = new LeaderLine(
    mex,
    LeaderLine.pointAnchor(mexMap, {
        x: 15,
        y: 15
      }),
      {
        color: '#F15D3B',
        path: 'grid',
        startSocket: 'bottom',
        endSocket: 'top',
        endPlug: 'disc',
        endPlugSize: 2.5,
        size: 1
    }
);

const states = document.querySelectorAll('.accordeon_item');
const maps = [qroMap, bcsMap, nayMap, mexMap, jalMap, tamMap, verMap, gtoMap];
const map = document.getElementById('svg_map');
states.forEach((state, index) => {
    state.addEventListener("mouseover", function(){
        maps[index].classList.add('background_state');
        map.style.zIndex = 1;
    });
    state.addEventListener("mouseout", function(){
        maps[index].classList.remove('background_state');
        map.style.zIndex = -1;
    });
});

qro.addEventListener('mouseover', function(){
    const container = document.querySelector('.project_container_qro');
    container.classList.add('line');
});
qro.addEventListener('mouseout', function(){
    const container = document.querySelector('.project_container_qro');
    container.classList.remove('line');
});

}