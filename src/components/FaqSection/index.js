import React from 'react'
import './style.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const FaqSection = () => {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <section className="faq-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title">
                            <span>FAQ</span>
                            <h2>Preguntas Frecuentes</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary
                                expandIcon={""}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography>¿Cuáles son los horarios de check-in y check-out?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    El check-in se realiza a partir de las 14:00 horas y el check-out hasta las 11:00 horas. Si necesita ingresar antes o salir más tarde, contáctenos con anticipación para verificar disponibilidad.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary
                                expandIcon={""}
                                aria-controls="panel2bh-content"
                                id="panel2bh-header"
                            >
                                <Typography>¿Se permite cancelar o modificar una reserva?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Sí, puede cancelar o modificar su reserva hasta 48 horas antes del día de ingreso sin costo adicional. Después de ese plazo, podría aplicarse una penalización.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                            <AccordionSummary
                                expandIcon={""}
                                aria-controls="panel3bh-content"
                                id="panel3bh-header"
                            >
                                <Typography>¿El hotel incluye desayuno?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Sí, todas nuestras tarifas incluyen desayuno continental, servido en el comedor del hotel de 7:00 a 10:00 horas.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                            <AccordionSummary
                                expandIcon={""}
                                aria-controls="panel4bh-content"
                                id="panel5bh-header"
                            >
                                <Typography>¿Se aceptan mascotas?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lamentablemente, no aceptamos mascotas en nuestras instalaciones, con la excepción de animales de asistencia debidamente certificados.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default FaqSection;
