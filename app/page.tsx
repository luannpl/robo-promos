"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Users,
  Activity,
  CheckCircle2,
  XCircle,
  Calendar,
  Network,
  Trash2,
  Settings,
  Bell,
  Sparkles,
  User,
  Menu,
  X,
} from "lucide-react"

interface Margem {
  id: string
  nome: string
  status: "ativa" | "inativa"
  ultimaAtualizacao: string
  sessoesAtivas: number
  dependentes: number
}

export default function PainelAfiliados() {
  const [menuAberto, setMenuAberto] = useState(false)
  const [margens] = useState<Margem[]>([
    {
      id: "1",
      nome: "Hiper Geral Margem 1",
      status: "ativa",
      ultimaAtualizacao: "1/1",
      sessoesAtivas: 1,
      dependentes: 1,
    },
    {
      id: "2",
      nome: "Hyper Fit Margem 1.1",
      status: "ativa",
      ultimaAtualizacao: "1/1",
      sessoesAtivas: 1,
      dependentes: 1,
    },
    {
      id: "3",
      nome: "Hyper Fit Margem 1.2",
      status: "ativa",
      ultimaAtualizacao: "1/1",
      sessoesAtivas: 1,
      dependentes: 1,
    },
    {
      id: "4",
      nome: "Hyper Fit Margem 1.3",
      status: "ativa",
      ultimaAtualizacao: "1/1",
      sessoesAtivas: 1,
      dependentes: 1,
    },
    {
      id: "5",
      nome: "Hyper Fit Margem 1.4",
      status: "ativa",
      ultimaAtualizacao: "1/1",
      sessoesAtivas: 1,
      dependentes: 1,
    },
    {
      id: "6",
      nome: "Hyper Fit Margem 1.5",
      status: "ativa",
      ultimaAtualizacao: "1/1",
      sessoesAtivas: 1,
      dependentes: 1,
    },
  ])

  const totalMargens = 11
  const totalSessoes = 11
  const sessoesConectadas = 6
  const sessoesDesconectadas = 5

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Header */}
      <header className="border-b border-border/10 bg-background py-4">
        <div className="w-full px-4 md:px-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-white">Painel de Afiliados Whatsapp</h1>
              <p className="text-sm text-gray-400 mt-1">Gerencie suas sessões e margens WhatsApp</p>
            </div>

            {/* Desktop - Botões visíveis */}
            <div className="hidden md:flex items-center gap-3">
              <Button variant="outline" size="sm" className="gap-2 bg-transparent border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white whitespace-nowrap">
                <Settings className="h-4 w-4" />
                API
              </Button>
              <Button variant="outline" size="sm" className="gap-2 bg-transparent border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white whitespace-nowrap">
                <span className="font-serif italic font-bold">T</span>
                Configurar Textos
              </Button>
              <Button size="sm" className="bg-white text-black hover:bg-gray-200 font-medium whitespace-nowrap">
                + Nova Margem
              </Button>
            </div>

            {/* Mobile - Botão Hambúrguer */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-gray-300 hover:text-white hover:bg-gray-800"
              onClick={() => setMenuAberto(!menuAberto)}
            >
              {menuAberto ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {menuAberto && (
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black/60 z-40 md:hidden"
              onClick={() => setMenuAberto(false)}
            />
            
            {/* Drawer */}
            <div className="fixed top-0 right-0 h-full w-64 bg-[#0a0a0a] border-l border-gray-800 z-50 md:hidden shadow-2xl animate-slide-in">
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-white">Menu</h2>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setMenuAberto(false)}
                    className="text-gray-400 hover:text-white"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                <Button
                  variant="outline"
                  className="w-full justify-start gap-2 bg-transparent border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
                  onClick={() => setMenuAberto(false)}
                >
                  <Settings className="h-4 w-4" />
                  API
                </Button>

                <Button
                  variant="outline"
                  className="w-full justify-start gap-2 bg-transparent border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
                  onClick={() => setMenuAberto(false)}
                >
                  <span className="font-serif italic font-bold">T</span>
                  Configurar Textos
                </Button>

                <Button
                  className="w-full justify-start bg-white text-black hover:bg-gray-200 font-medium"
                  onClick={() => setMenuAberto(false)}
                >
                  + Nova Margem
                </Button>
              </div>
            </div>
          </>
        )}
      </header>

      <div className="w-full px-4 md:px-6 py-6 md:py-8">
        {/* Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
          <Button variant="secondary" className="bg-white text-black hover:bg-gray-200 gap-2 rounded-md whitespace-nowrap">
            <Users className="h-4 w-4" />
            Painel do WhatsApp
          </Button>
          <Button variant="ghost" className="text-gray-400 hover:text-white hover:bg-gray-800 gap-2 whitespace-nowrap">
            <Activity className="h-4 w-4" />
            Envio Direto Telegram
          </Button>
          <Button variant="ghost" className="text-gray-400 hover:text-white hover:bg-gray-800 gap-2 whitespace-nowrap">
            <Network className="h-4 w-4" />
            Monitoramento
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="bg-[#111111] border-none shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <span className="text-sm text-gray-400">Total de Margens</span>
                <Users className="h-5 w-5 text-gray-500" />
              </div>
              <p className="text-3xl font-bold text-white">{totalMargens}</p>
            </CardContent>
          </Card>

          <Card className="bg-[#111111] border-none shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <span className="text-sm text-gray-400">Total de Sessões</span>
                <div className="h-5 w-5 border-2 border-gray-600 rounded-sm" />
              </div>
              <p className="text-3xl font-bold text-white">{totalSessoes}</p>
            </CardContent>
          </Card>

          <Card className="bg-[#111111] border-none shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <span className="text-sm text-gray-400">Sessões Conectadas</span>
                <Network className="h-5 w-5 text-gray-500" />
              </div>
              <p className="text-3xl font-bold text-green-500">{sessoesConectadas}</p>
            </CardContent>
          </Card>

          <Card className="bg-[#111111] border-none shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <span className="text-sm text-gray-400">Sessões Desconectadas</span>
                <Network className="h-5 w-5 text-gray-500 opacity-50" />
              </div>
              <p className="text-3xl font-bold text-red-500">{sessoesDesconectadas}</p>
            </CardContent>
          </Card>
        </div>

        {/* Connection Status */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
            <span className="text-sm text-gray-400">Conectado à API</span>
          </div>
          <span className="text-sm text-gray-500">|</span>
          <span className="text-sm text-gray-400">Atualização automática: 3s</span>
        </div>

        {/* Margins Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {margens.map((margem) => (
            <Card key={margem.id} className="bg-[#111111] border-none shadow-lg relative group">
              <CardContent className="p-5">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-gray-500" />
                    <h3 className="text-sm font-medium text-white truncate flex-1">{margem.nome}</h3>
                    <span className="text-xs text-green-500/50 font-mono">1/1</span>
                  </div>

                  {/* Status */}
                  <div className="flex items-center justify-between py-1">
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 border border-gray-600 rounded-sm" />
                      <span className="text-xs text-gray-400">1ª sessão</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                      <span className="text-xs text-green-500">Ativo</span>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <div className="h-3 w-3 border border-gray-600 rounded-sm" />
                      <span>HIPER GERAL -</span>
                    </div>
                    <div className="pl-5 text-xs text-gray-500">
                      UPdesconto Fitness - 11
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 bg-transparent border-gray-700 text-gray-300 hover:bg-gray-800 h-9"
                    >
                      <Settings className="h-4 w-4 mr-2" />
                      Expandir
                    </Button>
                    <Button
                      variant="destructive"
                      size="icon"
                      className="h-9 w-9 bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white border border-red-500/20"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
